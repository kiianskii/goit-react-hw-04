import { Formik, Form, Field } from "formik"
import s from "./SearchBar.module.css"


function SearchBar({ onSearchQuerry }) {
    
    const initialValues = {
        querry: ''
    }

    function onSubmit(data, options) {
        onSearchQuerry(data.querry.toLowerCase())

        options.resetForm()
    }
  return (
      <header className={s.header}>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
        <Field type="text" placeholder="Search images and photos" name="querry"/>
        <button type="submit">Search</button>
        </Form>
    </Formik>
    </header>
  )
}

export default SearchBar