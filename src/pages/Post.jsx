import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DBService from "../appwrite/configuration";
import Button from "../components/Button";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const userData = useSelector((state) => state.authen.userData);
    const isAuthor = post && userData ? post.userid === userData.$id : false;
    const [showToast, setShowToast] = useState(false);


    useEffect(() => {
        if (slug) {
            DBService.getDocument(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);



    const deletePost = async () => {
        const status = await DBService.deleteDocument(post.$id);
        if (status) {
            DBService.deleteFile(post.image);
        }
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            navigate('/');
        }, 2000);
    };

    return post ? (
        <div className="px-6 py-8 sm:px-8 sm:py-8 mb-5">
            <div className="w-full max-w-7xl mx-auto ">
                <div className="flex flex-row justify-between mb-5">
                    <div className="w-full sm:max-w-3/4">
                        <h1 className="text-2xl sm:text-3xl font-bold">{post.title}</h1>
                    </div>
                    {isAuthor && (
                        <div className="relative" ref={menuRef}>
                            <button
                                className="p-2 cursor-pointer rounded-full hover:bg-gray-200 focus:outline-none"
                                onClick={() => setMenuOpen((open) => !open)}
                                aria-label="Open menu"
                            >
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="1.5" />
                                    <circle cx="12" cy="12" r="1.5" />
                                    <circle cx="12" cy="19" r="1.5" />
                                </svg>
                            </button>
                            <div
                                className={`absolute rounded-lg right-0 mt-2 w-36 bg-white border border-gray-200 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] z-10 flex flex-col px-7 py-5 transition-opacity duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                style={{ minWidth: '8rem' }}
                            >
                                <Link to={`/edit-post/${post.$id}`} onClick={() => setMenuOpen(false)}>
                                    <Button bgColor="bg-green-500" hover="hover:bg-green-600" className="cursor-pointer w-full mb-2" >
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" hover="hover:bg-red-600" onClick={() => { setMenuOpen(false); deletePost(); }} className="w-full cursor-pointer ">
                                    Delete
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="text-lg font-semibold my-6">
                    Author : <span>{post.author}</span>
                </div>
                <div className="w-full sm:w-3/4 flex justify-center mb-4 relative py-2">
                    <img
                        src={DBService.getFilePrev(post.image)}
                        alt={post.title}
                        className="rounded-lg"
                    />
                </div>

                <div className="w-full sm:w-3/4 py-8 text-justify leading-relaxed text-base~ sm:text-lg">
                    {parse(post.body)}
                </div>
            </div>
            {showToast && (
                <div
                    className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] bg-red-600 text-white px-2 py-2 rounded shadow-lg transition-all duration-500 animate-toast-in"
                    style={{ minWidth: 200, textAlign: 'center' }}
                >
                    Blog deleted!
                </div>
            )}
        </div>
    ) : null;
}
