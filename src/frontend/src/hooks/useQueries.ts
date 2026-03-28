import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitServiceRequest() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      serviceType,
      message,
    }: {
      name: string;
      phone: string;
      serviceType: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitServiceRequest(name, phone, serviceType, message);
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
