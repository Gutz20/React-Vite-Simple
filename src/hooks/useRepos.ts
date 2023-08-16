import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import apiGithub from "@/libs/axiosGithub";
import { Repository } from "@/types/types";

export const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_, githubUser] = ctx.queryKey
  const { data } = await apiGithub.get<Repository[]>(
    `/users/${githubUser}/repos`
  );
  return data;
};

export const useFetchRepositories = (githubUser: string) => {
  return useQuery(["repos", githubUser], fetchRepos);
};
