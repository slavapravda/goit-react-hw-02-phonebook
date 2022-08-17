const Filter = ({onChange}) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" name="filter" placeholder="..." onChange={onChange}/>
      </label>
    </>
  );
};

export default Filter;
