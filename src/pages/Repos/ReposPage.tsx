import { useFetchRepositories } from "@/hooks/useRepos";
import { useFavoriteReposStore } from "@/store/favoriteRepos";
import { CardRepo } from ".";

const ReposPage = () => {
  const { favoritesReposIds } = useFavoriteReposStore();
  const { data, isLoading } = useFetchRepositories("fazt");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map((repository) => (
        <CardRepo
          key={repository.id}
          repository={repository}
          isFavorite={favoritesReposIds.includes(repository.id)}
        />
      ))}
    </div>
  );
};

export default ReposPage;
