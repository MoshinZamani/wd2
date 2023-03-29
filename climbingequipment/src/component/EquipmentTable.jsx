const EquipmentTable = ({ equipment }) => {
  return (
    <table className="table">
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
