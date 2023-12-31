'use client'
import clsx from 'clsx'
import StickyHeadTable, {
  DepartmentTableData,
} from '../../components/DepartmentTable'
import { useEffect, useState } from 'react'
import { getAllDepartments, isAuthenticated } from '../../api/api'

export default function ListDepartments() {
  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/'
    }
  }, [])

  const [departments, setDepartments] = useState<DepartmentTableData[]>([])

  useEffect(() => {
    getAllDepartments()
      .then((res) => setDepartments(res))
      .catch(() => alert('Erro ao listar departamentos do sistema'))
  }, [])

  return (
    <div className={clsx('p-4 w-full')}>
      {departments.length > 0 ? <StickyHeadTable rows={departments} /> : ''}
    </div>
  )
}
