import { useParams } from "react-router-dom";
import { AppURL } from "../../api/AppURL";
import { postApi } from "../../api/site/postApi";
import { useApiCall } from "../../hooks";
import { ImageLoader, SiderbarBlog } from "../../components/common";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const PostDetail = () => {
  const { slug } = useParams();
  const { data } = useApiCall(
    async () => {
      return await postApi.get(slug);
    },
    [slug],
    []
  );
  const post = data?.data?.data || [];

  return (
    <div className="p-10">
      <div className="grid-cols-5 grid gap-5">
        <div className="col-span-1 p-5 border-r ">
          <SiderbarBlog />
        </div>
        <div className="col-span-4">
          <div className=" m-0">
            <ImageLoader
              className="w-full h-full"
              src={AppURL.ImageUrl + post?.image}
              alt=""
            />
          </div>
          <div className="w-[80%] m-auto my-10">
            <p className="my-3 text-blue-400">Category</p>
            <h1 className="text-3xl font-bold mb-10">{post?.title}</h1>
            <div className="text-[13px]">{post?.compact}</div>
            <div className="my-10 text-gray-500 leading-8 text-base">
              {post?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
