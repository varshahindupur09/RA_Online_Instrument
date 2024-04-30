import React from 'react';
import '../components/styles_css/PageStyle.css'; 

const EndFLPage = () => {
    return (
        <div className="container">
            <h3>ADDITIONAL QUESTIONS</h3>
            <p>
                * What is your gender?
            </p>
            <div className="radio-container">
                <input type="radio" id="additional-questions-1" name="additional-questions" value="Male" />
                <label htmlFor="additional-questions-1">Male</label>
                <br />
                <input type="radio" id="additional-questions-2" name="additional-questions" value="Female" />
                <label htmlFor="additional-questions-2">Female</label>
                <br />
                <input type="radio" id="additional-questions-3" name="additional-questions" value="Non Binary" />
                <label htmlFor="additional-questions-3">Non Binary</label>
                <br />
                <input type="radio" id="additional-questions-4" name="additional-questions" value="Transgender" />
                <label htmlFor="additional-questions-4">Transgender</label>
                <br />
                <input type="radio" id="additional-questions-5" name="additional-questions" value="Prefer not to say" />
                <label htmlFor="additional-questions-5">Prefer not to sa</label>
            </div>
            <br/>
            <br/>
            <br/>
            <p>
                * Please indicate the highest level of education you have completed.
            </p>
            <div className="radio-container">
                <input type="radio" id="education-level-1" name="education-level" value="Some high school" />
                <label htmlFor="education-level-1">Some high school</label>
                <br />
                <input type="radio" id="education-level-2" name="education-level" value="High school diploma" />
                <label htmlFor="education-level-2">High school diploma</label>
                <br />
                <input type="radio" id="education-level-3" name="education-level" value="Some college" />
                <label htmlFor="education-level-3">Some college</label>
                <br />
                <input type="radio" id="education-level-4" name="education-level" value="College diploma" />
                <label htmlFor="education-level-4">College diploma</label>
                <br />
                <input type="radio" id="education-level-5" name="education-level" value="Undergraduate degree" />
                <label htmlFor="education-level-5">Undergraduate degree</label>
                <br />
                <input type="radio" id="education-level-6" name="education-level" value="Graduate degree" />
                <label htmlFor="education-level-6">Graduate degree</label>
            </div>
            <br/>
            <br/>
            <br/>
            <p>
                * How many years of work experience do you have?
            </p>
            <div className="radio-container">
                <input type="radio" id="work-experience-1" name="work-experience" value="Less than one" />
                <label htmlFor="work-experience-1">Less than one</label>
                <br />
                <input type="radio" id="work-experience-2" name="work-experience" value="1-3" />
                <label htmlFor="work-experience-2">1-3</label>
                <br />
                <input type="radio" id="work-experience-3" name="work-experience" value="3-5" />
                <label htmlFor="work-experience-3">3-5</label>
                <br />
                <input type="radio" id="work-experience-4" name="work-experience" value="5-10" />
                <label htmlFor="work-experience-4">5-10</label>
                <br />
                <input type="radio" id="work-experience-5" name="work-experience" value="More than 10" />
                <label htmlFor="work-experience-5">More than 10</label>
            </div>
            <br/>
            <br/>
            <br/>
            <p>
                * How many years of those years involved supervision of other employees?
            </p>
            <div className="radio-container">
                <input type="radio" id="supervision-experience-1" name="supervision-experience" value="Less than one" />
                <label htmlFor="supervision-experience-1">Less than one</label>
                <br />
                <input type="radio" id="supervision-experience-2" name="supervision-experience" value="1-3" />
                <label htmlFor="supervision-experience-2">1-3</label>
                <br />
                <input type="radio" id="supervision-experience-3" name="supervision-experience" value="3-5" />
                <label htmlFor="supervision-experience-3">3-5</label>
                <br />
                <input type="radio" id="supervision-experience-4" name="supervision-experience" value="5-10" />
                <label htmlFor="supervision-experience-4">5-10</label>
                <br />
                <input type="radio" id="supervision-experience-5" name="supervision-experience" value="More than 10" />
                <label htmlFor="supervision-experience-5">More than 10</label>
            </div>
            <br/>
            <br/>
            <br/>
            <p>
                * How many years of those years involved managing a budget in an employment setting?
            </p>
            <div className="radio-container">
                <input type="radio" id="budget-management-experience-1" name="budget-management-experience" value="Less than one" />
                <label htmlFor="budget-management-experience-1">Less than one</label>
                <br />
                <input type="radio" id="budget-management-experience-2" name="budget-management-experience" value="1-3" />
                <label htmlFor="budget-management-experience-2">1-3</label>
                <br />
                <input type="radio" id="budget-management-experience-3" name="budget-management-experience" value="3-5" />
                <label htmlFor="budget-management-experience-3">3-5</label>
                <br />
                <input type="radio" id="budget-management-experience-4" name="budget-management-experience" value="5-10" />
                <label htmlFor="budget-management-experience-4">5-10</label>
                <br />
                <input type="radio" id="budget-management-experience-5" name="budget-management-experience" value="More than 10" />
                <label htmlFor="budget-management-experience-5">More than 10</label>
            </div>
        </div>
    );
};

export default EndFLPage;
