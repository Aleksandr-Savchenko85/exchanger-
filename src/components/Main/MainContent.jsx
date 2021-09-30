import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMethod } from '../../redux/action';
// import { Formik, Form, Field } from 'formik';
// import { Input, InputSelect } from '../FormControl';

const MainContent = () => {
  const methods = useSelector(state => state.methods.methods);
  const invoice = methods[0]?.invoice;
  const withdr = methods[0]?.withdraw;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMethod());
  }, [dispatch]);

  return (
    <>
      <main className="content">
        <h1 className="title">Main super Page</h1>
        {/* <Formik initialValues={{ ...initialValues }} onSubmit={onSubmit} enableReinitialize>
          {({ setFieldValue, ...props }) => (
            <Form className="form">
              <div className="inputs">
                <div className="input-wrap">
                  <p className="text-input">Sell</p>
                  <Field component={InputSelect} />
                  <Field component={Input} />
                </div>
                <div className="input-wrap">
                  <p className="text-input">Buy</p>
                  <Field component={InputSelect} />
                  <Field component={Input} />
                </div>
              </div>
              <button className="btn" type="submit">
                <p> Exchange </p>
              </button>
            </Form>
          )}
        </Formik> */}
        <div className="form">
          <div className="inputs">
            <div className="input-wrap">
              <p className="text-input">Sell</p>
              <select className="select-input" name="select" id="">
                <option value="">{withdr?.[0]?.name}</option>
                <option value="">{withdr?.[1]?.name}</option>
                <option value="">{withdr?.[2]?.name}</option>
              </select>
              <input className="input" type="text" placeholder="amount" />
            </div>

            <div className="input-wrap">
              <p className="text-input">Buy</p>
              <select className="select-input" name="select" id="">
                <option value="">{invoice?.[0]?.name}</option>
                <option value="">{invoice?.[1]?.name}</option>
                <option value="">{invoice?.[2]?.name}</option>
              </select>
              <input className="input" type="text" placeholder="amount" />
            </div>
          </div>

          <button className="btn" type="submit">
            Exchange
          </button>
        </div>
      </main>
    </>
  );
};

export default MainContent;
