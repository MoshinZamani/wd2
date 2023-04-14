const EquipmentTable = ({ equipment, selected }) => {
  if (equipment.length === 0)
    return (
      <h3 className="nodata">
        Nothing in the database for {selected}. Please check later.
      </h3>
    );
  return (
    <table className="table rounded table-dark table-responsive">
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {equipment.map((e) => (
          <tr key={e.name}>
            <td>{e.name}</td>
            <td>
              <a href={e.link} target="_blank">
                {e.link}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EquipmentTable;
