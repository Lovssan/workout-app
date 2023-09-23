import { Controller } from 'react-hook-form'
import Select from 'react-select'

const SelectExercises = ({ control, data = [] }) => {
	const options = data.map(ex => ({ label: ex.name, value: ex.id }))
	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<Select
					options={options}
					isMulti
					placeholder='Select exercises'
					classNamePrefix='select2-selection'
					value={value}
					onChange={onChange}
				/>
			)}
			rules={{ required: 'Please choose min 1 exercises' }}
		/>
	)
}
export default SelectExercises
