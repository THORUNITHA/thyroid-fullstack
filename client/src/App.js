import React, {useState } from 'react';
import axios from 'axios';

function ThyroidDetectionForm() {


  const [formData, setFormData] = useState({
    age: 0,
    sex: 0,
    TSH: 0,
    T3: 0,
    T4U: 0,
    FTI: 0,
    onthyroxine: 0,
    queryonthyroxine: 0,
    onantithyroidmedication: 0,
    sick: 0,
    pregnant: 0,
    thyroidsurgery: 0,
    I131treatment: 0,
    queryhypothyroid: 0,
    queryhyperthyroid: 0,
    lithium: 0,
    goitre: 0,
    tumor: 0,
    hypopituitary: 0,
    psych: 0,
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://thyroid-ss1-64739381ce70.herokuapp.com/predict', formData, {
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      })
      .then((response) => {
        setResult(response.data);
       
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    
    <div className="container">
      <div className="col-md-12">
        <div className="card mt-100">
          <div className="card-body">
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="age">Age</label><br />
              <input
                type="number"
                className="form-control"
                name="age"
                id="age"
                min="1"
                max="100"
                placeholder="(1, 100)"
                step="any"
                onChange={handleChange}
                required
              /><br />
<label htmlFor="sex">Sex</label><br />
<input
  type="number"
  className="form-control"
  name="sex"
  id="sex"
  min="0"
  max="1"
  placeholder="Male - 1, Female - 0"
  onChange={handleChange}
  required
/><br />

<label htmlFor="tsh">Thyroid Stimulating Hormone Level</label><br />
<input
  type="number"
  className="form-control"
  name="TSH"
  id="tsh"
  min="0.005"
  max="478.0"
  placeholder="(0.005, 478.0)"
  step="any"
  onChange={handleChange}
  required
/><br />
<label htmlFor="t3">T3 Level</label><br />
<input
  type="number"
  className="form-control"
  name="T3"
  id="t3"
  min="0.05"
  max="10.6"
  placeholder="(0.05, 10.6)"
  step="any"
  onChange={handleChange}
  required
/><br />
<label htmlFor="t4u">T4U Level</label><br />
<input
  type="number"
  className="form-control"
  name="T4U"
  id="t4u"
  min="0.31"
  max="2.12"
  placeholder="(0.31, 2.12)"
  step="any"
  onChange={handleChange}
  required
/><br />
<label htmlFor="fti">Free Thyroxine Index (FTI)</label><br />
<input
  type="number"
  className="form-control"
  name="FTI"
  id="fti"
  min="2.0"
  max="395.0"
  placeholder="(2.0, 395.0)"
  step="any"
  onChange={handleChange}
  required
/><br />
<label htmlFor="onthyroxine">On Thyroxine</label><br />
<input
  type="number"
  className="form-control"
  name="onthyroxine"
  id="on_thyroxine"
  min="0"
  max="1"
  placeholder="(0, 1)"
  onChange={handleChange}
  required
/><br />
<label htmlFor="queryonthyroxine">Query On Thyroxine</label><br />
<input
  type="number"
  className="form-control"
  name="queryonthyroxine"
  id="query_on_thyroxine"
  min="0"
  max="1"
  placeholder="(0, 1)"
  onChange={handleChange}
  required
/><br />
<label htmlFor="onantithyroidmedication">On Antithyroid Medication</label><br />
<input
  type="number"
  className="form-control"
  name="onantithyroidmedication"
  id="on_anti_thyroid_medication"
  min="0"
  max="1"
  placeholder="(0, 1)"
  onChange={handleChange}
  required
/><br />
<label htmlFor="sick">Sick</label><br />
<input
  type="number"
  className="form-control"
  name="sick"
  id="sick"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="pregnant">Pregnant</label><br />
<input
  type="number"
  className="form-control"
  name="pregnant"
  id="pregnant"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="thyroidsurgery">Thyroid Surgery</label><br />
<input
  type="number"
  className="form-control"
  name="thyroidsurgery"
  id="thyroid_surgery"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="I131_treatment">I131 Treatment</label><br />
<input
  type="number"
  className="form-control"
  name="I131treatment"
  id="I131_treatment"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="queryhypothyroid">Query Hypothyroid</label><br />
<input
  type="number"
  className="form-control"
  name="queryhypothyroid"
  id="query_hypothyroid"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="queryhyperthyroid">Query Hyperthyroid</label><br />
<input
  type="number"
  className="form-control"
  name="queryhyperthyroid"
  id="query_hyperthyroid"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="lithium">Lithium</label><br />
<input
  type="number"
  className="form-control"
  name="lithium"
  id="lithium"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="goitre">Goitre</label><br />
<input
  type="number"
  className="form-control"
  name="goitre"
  id="goitre"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="tumor">Tumor</label><br />
<input
  type="number"
  className="form-control"
  name="tumor"
  id="tumor"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="hypopituitary">Hypopituitary</label><br />
<input
  type="number"
  className="form-control"
  name="hypopituitary"
  id="hypopituitary"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />
<label htmlFor="psych">Psychological Symptoms</label><br />
<input
  type="number"
  className="form-control"
  name="psych"
  id="psych"
  min="0"
  max="1"
  placeholder="Yes - 1, No - 0"
  onChange={handleChange}
  required
/><br />


              <center>
                <b>
                  <input type="submit" name="sb" value="Predict" className="sub btn btn-primary" /><br />
                </b>
              </center>
            </form>
            <div>
      {result !== '' && <p>Result: {result}</p>}    </div>
            
          
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

          </div>
        </div>
      </div>
    </div>

    
  );
}



export default ThyroidDetectionForm;
