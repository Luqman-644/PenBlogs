import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from '../Button.jsx'
import Input from '../Input.jsx'
import RTE from "../RTE.jsx";
import Select from "../Select.jsx";
import DBService from "../../appwrite/configuration";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

export default function PostForm({ post }) {
    const [loading, setloading] = useState();
    const [error, seterror] = useState('');
    const [showToast, setShowToast] = useState(false);

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            body: post?.body || "",
            status: post?.status || "active",
            disc: post?.disc || '',
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.authen.userData);

    const submit = async (data) => {
        setloading(true);
        seterror('');
        try {
            if (post) {
                const file = data.image[0] ? await DBService.uploadFile(data.image[0]) : null;

                if (file) {
                    DBService.deleteFile(post.image);
                }

                const dbPost = await DBService.updateDocument(post.$id, {
                    ...data,
                    image: file ? file.$id : post.image,
                });

                if (dbPost) {
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                        navigate(`/post/${dbPost.$id}`);
                    }, 2000);
                }
                setloading(false);
            } else {
                const file = await DBService.uploadFile(data.image[0]);

                if (file) {
                    const fileId = file.$id;
                    data.image = fileId;

                    const dbPost = await DBService.createDocument({ ...data, userid: userData.$id, author: userData.name });
                    if (dbPost) {
                        setShowToast(true);
                        setTimeout(() => {
                            setShowToast(false);
                            navigate(`/post/${dbPost.$id}`);
                        }, 2000);
                    }

                }
            }
        } catch (error) {
            seterror(error)
        } finally {
            setloading(false);
        }

    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            let slug = value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-+|-+$/g, "");

            if (slug.length > 36) {
                slug = slug.substring(0, 36);
                if (slug.endsWith("-")) {
                    slug = slug.slice(0, -1);
                }
            }

            return slug;
        }
        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <>
            <h1 className="text-2xl sm:text-3xl font-bold text-center">{post ? "Edit Blog" : "Add Blog"}</h1>
            <form onSubmit={handleSubmit(submit)} className="md:flex py-3 px-1 sm:px5">
                <div className="md:w-2/3 px-2">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className="mb-4"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug :"
                        placeholder="Slug"
                        className="mb-4"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <Input
                        label="Description :"
                        placeholder="Description"
                        className="mb-4"
                        {...register("disc", { required: true })}
                    />
                    <RTE label="Body :" name="body" control={control} defaultValue={getValues("body")} />
                </div>
                <div className="w-full mt-20 md:mt-0 md:w-1/3 px-2">
                    <Input
                        label="Image :"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-full mb-4">
                            <img
                                src={DBService.getFilePrev(post.image)}
                                alt={post.title}
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status:"
                        className="mb-4"
                        {...register("status", { required: true })}
                    />
                    <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                        {post ? "Update Blog" : "Submit Blog"}

                    </Button>
                    {loading ? (
                        <div className="w-full flex justify-center mt-10">
                            <BeatLoader color="#1447e6" />
                        </div>
                    ) : null}
                    {error &&
                        <p className="text-red-700">{error.message}</p>}
                    {showToast && (
                        <div
                            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] bg-green-600 text-white px-4 py-2 rounded shadow-lg transition-all duration-500 animate-toast-in"
                            style={{ minWidth: 200, textAlign: 'center' }}
                        >
                            Blog Created!
                        </div>
                    )}
                </div>
            </form>
        </>
    );
}
