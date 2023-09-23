import cn from 'clsx'
import { Link } from 'react-router-dom'

import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import Layout from '../../layout/Layout'
import SelectExercises from './SelectExercises'
import { useListExercises } from './useExercises'
import { useWorkout } from './useWorkout'

const NewWorkout = () => {
	const {
		register,
		handleSubmit,
		errors,
		control,
		isLoading,
		error,
		isSuccess,
		onSubmit
	} = useWorkout()
	const { data } = useListExercises()

	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpg'
				heading='Create new workout'
			/>
			<div className={cn('wrapper-inner-page')}>
				{isLoading && <Loader />}
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						register={register}
						name='name'
						options={{ required: 'Name is required' }}
						error={errors.name}
						placeholder='name'
					/>
					<Link to={'/new-exercise'} className='dark-link'>
						Add new exercise
					</Link>
					<SelectExercises control={control} data={data?.data} />
					{errors?.exerciseIds && (
						<div className='error'>{errors?.exerciseIds?.message}</div>
					)}
					<Button size='marginTop'>Create exercise</Button>
				</form>
			</div>
		</>
	)
}
export default NewWorkout
