import style from './style';

const SourcePicker = ({sources, onChangeHandler}) => {
	const options = sources.map(source => <option value={source.id}>{source.name}</option>);
	return (
		<div>
			<label class={style.selectorLabel}> Select your news source:</label>
			<select class={style.selector} onChange={onChangeHandler}>
				{options}
			</select>
		</div>
	);
};

export default SourcePicker;