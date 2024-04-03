import { Formik, Form, Field } from "formik"


function SearchBar({ onSearchQuerry }) {
    
    const initialValues = {
        querry: ''
    }

    function onSubmit(data, options) {
        onSearchQuerry(data.querry)

        options.resetForm()
    }
  return (
      <header>
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