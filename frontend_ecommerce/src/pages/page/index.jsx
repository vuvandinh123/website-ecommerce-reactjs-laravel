import { useParams } from "react-router-dom";
import { useApiCall } from "../../hooks";
import { pageApi } from "../../api/site/pageApi";

const PageDetail = () => {
  const { slug } = useParams();
  const { data } = useApiCall(
    async () => {
      return await pageApi.get(slug);
    },
    [slug],
    []
  );
  const page = data?.data?.data || [];
  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <h1 className="text-2xl font-bold text-center my-10">{page.title}</h1>
      <div className="my-5 ">
        <div className="leading-7 text-gray-500" dangerouslySetInnerHTML={{ __html: page?.content }} />
      </div>
    </div>
  );
};

export default PageDetail;
