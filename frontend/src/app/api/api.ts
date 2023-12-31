import {
  TeacherType,
  SignInType,
  StudentSignUpType,
  RatingType,
  ReportType,
  StudentType,
  ClassType,
} from '../utils/types'

//
//  Módulo de Autenticação
//
export const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return true
  }
  return false
}

export const logout = () => {
  localStorage.clear()
  window.location.href = '/'
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const signIn = (data: SignInType) => {
  return fetch('http://localhost:3333/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const signUp = (data: StudentSignUpType) => {
  const formData = new FormData()
  formData.append('student_id', data.student_id)
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('password', data.password)
  formData.append('is_admin', data.is_admin.toString())

  if (data.image) {
    const blob = new Blob([data.image], { type: 'application/octet-stream' })
    formData.append('image', blob, 'image.jpg')
  }

  return fetch('http://localhost:3333/students', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .catch((err) => {
      throw err
    })
}

//
// Módulo de turmas
//

export const createClass = (classData: ClassType) => {
  return fetch('http://localhost:3333/classes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(classData),
  })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .catch((err) => {
      throw err
    })
}

export const getAllClassInfo = () => {
  return fetch('http://localhost:3333/classes/complete-info', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const deleteClass = (id: number) => {
  return fetch(`http://localhost:3333/classes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .catch((err) => {
      throw err
    })
}
//
// Módulo de departamentos
//
export const getAllDepartments = () => {
  return fetch('http://localhost:3333/departments', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

//
// Modulo de Professores
//
export const getAllTeachers = () => {
  return fetch('http://localhost:3333/teachers', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const createTeacher = (teacherData: TeacherType) => {
  return fetch('http://localhost:3333/teachers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(teacherData),
  })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const updateTeacher = (teacherData: TeacherType) => {
  const { id, ...updateTeacherData } = teacherData
  return fetch(`http://localhost:3333/teachers/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(updateTeacherData),
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const deleteTeacher = (data: TeacherType) => {
  return fetch(`http://localhost:3333/teachers/${data.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

//
// Módulo de Estudantes
//

export const getAllStudents = () => {
  return fetch('http://localhost:3333/students', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const getStudentData = (identifier: number | string) => {
  return fetch(`http://localhost:3333/students/${identifier}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const updateStudent = (studentData: StudentType) => {
  const { email, ...updateStudentData } = studentData
  return fetch(`http://localhost:3333/students/${email}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(updateStudentData),
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const deleteStudent = (email: string) => {
  return fetch(`http://localhost:3333/students/${email}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .catch((err) => {
      throw err
    })
}

//
// Módulo de avaliação
//

export const createRating = (ratingData: RatingType) => {
  return fetch('http://localhost:3333/students/rating', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(ratingData),
  })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const getRating = (id: number) => {
  return fetch(`http://localhost:3333/ratings/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const getAllRatings = () => {
  return fetch('http://localhost:3333/ratings/complete-info', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const getRatingReports = () => {
  return fetch('http://localhost:3333/ratings/rating-reports', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const deleteRating = (id: number) => {
  return fetch(`http://localhost:3333/ratings/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .catch((err) => {
      throw err
    })
}

export const updateRating = (ratingData: RatingType) => {
  return fetch(`http://localhost:3333/ratings/${ratingData.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      score: ratingData.score,
      comment: ratingData.comment,
    }),
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

//
// Módulo de Denúncias
//

export const makeReport = (reportData: ReportType) => {
  return fetch('http://localhost:3333/reports', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(reportData),
  })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export const deleteReport = (id: number) => {
  return fetch(`http://localhost:3333/reports/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response
    })
    .catch((err) => {
      throw err
    })
}

//
// Módulo de Disciplinas
//

export const getAllDisciplines = () => {
  return fetch('http://localhost:3333/disciplines', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Erro de solicitação: ' + response.status)
      }
      return response.json()
    })
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}
