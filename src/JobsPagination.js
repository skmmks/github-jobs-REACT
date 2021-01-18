import React from 'react';
import { Pagination } from 'react-bootstrap';

export default function JobsPagination({ page, setPage }) {
  return (
    <div>
      <Pagination>
        <Pagination.Prev />
      </Pagination>
    </div>
  );
}
