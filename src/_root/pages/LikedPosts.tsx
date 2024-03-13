import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutation";

const LikedPosts = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();

  if (isLoading) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  if (
    !currentUser ||
    !currentUser.likedPosts ||
    currentUser.likedPosts.length === 0
  ) {
    return <p className="text-light-4">No liked Post</p>;
  }

  return <GridPostList posts={currentUser.likedPosts} showStats={false} />;
};

export default LikedPosts;