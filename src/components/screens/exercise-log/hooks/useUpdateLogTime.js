import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import exerciseLogService from '../../../../services/exercise/exercise-log.service'

export const useUpdateLogTime = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { mutate, error: errorChange } = useMutation({
		mutationKey: ['update log time'],
		mutationFn: ({ timeId, body }) => exerciseLogService.updateTime(timeId, body),
		onSuccess: () => {
				queryClient.invalidateQueries(['get exercise log', id])
		}
	})

	return { updateTime: mutate, errorChange }
}