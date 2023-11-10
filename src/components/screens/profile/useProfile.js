import { useQuery } from "@tanstack/react-query"
import userService from "../../../services/user.service"

export const useProfile = () => {
  return useQuery({
    queryKey: ['get profile'], 
    queryFn: () => userService.getProfile(),
    select: ({ data }) => data
  })
}