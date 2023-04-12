import _ from "lodash";

function paginateRecords(records, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(records).slice(startIndex).take(pageSize).value();
}

export default paginateRecords;
