import Layout from '../../layout/Layout'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'
import styles from './New-exercise.module.scss'
import { iconPath } from './icon-path.utils'
import { useExercise } from './useExercise'
import cn from 'clsx'
import { Controller } from 'react-hook-form'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		errors,
		control,
		isLoading,
		error,
		isSuccess,
		onSubmit
	} = useExercise()

	return (
		<>
			<Layout
				bgImage='/images/new-exercise-bg.jpg'
				heading='Create new exercise'
				backLink='/new-workout'
			/>
			<div className={cn('wrapper-inner-page', styles)}>
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
					<Field
						register={register}
						name='times'
						options={{
							required: 'Times is required',
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number'
						}}
						error={errors.times}
						placeholder='times'
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`img ${name}`}
										src={import.meta.env.VITE_SERVER_URL + iconPath(name)}
										alt={name}
										className={cn({
											[styles.active]: value === iconPath(name)
										})}
										onClick={() => onChange(iconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
						rules={{ required: 'Please choose type exercise' }}
					/>

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}
					<Button>Create exercise</Button>
				</form>
			</div>
		</>
	)
}
export default NewExercise
