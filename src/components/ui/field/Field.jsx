import styles from './Field.module.scss'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div style={{ marginBottom: '0.7rem' }}>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <p className={styles.error}>{error?.message}</p>}
		</div>
	)
}
export default Field
