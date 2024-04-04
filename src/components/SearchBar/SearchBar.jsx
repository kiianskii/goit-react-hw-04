import { Formik, Form, Field } from "formik"
import s from "./SearchBar.module.css"




function SearchBar({ onSearchQuery, setPage, notify }) {
    
    const initialValues = {
        query: ''
    }

    function onSubmit(data, options) {
        if (!data.query) { notify() }
        setPage(1)
        onSearchQuery(data.query)
        options.resetForm()
    }
  return (
      <header>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.header}>
        <Field type="text" placeholder="Search images and photos" name="query"/>
        <button className={s.btn} type="submit">Search</button>
        </Form>
    </Formik>
    </header>
  )
}

export default SearchBar