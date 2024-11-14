from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.action_chains import ActionChains
import time

# Chrome options
options = webdriver.ChromeOptions()
options.add_argument("start-maximized")

# Setup driver with WebDriver Manager
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
# url = "https://adg429.com"  # Update with the actual URL if different
url = "http://localhost:3000/"
dummy_prolific_id = "thisisseleniumautomation"  # Ensure this is 24 characters for testing

# Define dashboard URLs and a dictionary to match URL with dashboard type
dashboard_urls = {
    url + "structural-bar-dashboard": "Structural Bar Dashboard",
    url + "/structural-col-dashboard": "Structural Col Dashboard",
    url + "timeseries-bar-dashboard": "Timeseries Bar Dashboard",
    url + "timeseries-col-dashboard": "Timeseries Col Dashboard"
}


# Open the URL
driver.get(url)

def test_adg429_positive_flow_page_consent():
    try:
        # Wait for Prolific ID input if it's visible, then enter the Prolific ID
        time.sleep(2)
        print("Attempting to locate and enter Prolific ID...")
        search_prolific_id = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//input[@type='text']"))
        )
        
        search_prolific_id.click()
        search_prolific_id.send_keys(dummy_prolific_id)
        print("Entered Prolific ID successfully.")
        time.sleep(2)

        # Scroll to the bottom of the page
        print("Scrolling to the bottom of the page...")
        body = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, 'body'))
        )
        body.send_keys(Keys.CONTROL + Keys.END)

        # Wait for consent button to become enabled
        WebDriverWait(driver, 10).until(
            lambda d: d.execute_script("return document.getElementById('consent-yes').disabled") == False
        )

        # Initialize ActionChains
        actions = ActionChains(driver)

        # Wait for consent-yes button visibility and then click
        print("Waiting for consent options to be enabled...")
        consent_yes = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@for='consent-yes']"))
        )
        # actions.move_to_element(consent_yes).pause(0.5).click().perform()  # Move to the element and click
        # consent_yes.click()
        driver.execute_script("arguments[0].click();", consent_yes)
        print("Clicked consent 'Yes' button with ActionChains.")

        # Wait for the submit button and click it
        next_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        )
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 1.")

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()

def test_adg429_positive_flow_page_financial_literacy():
    try:
        # Wait for consent-yes button visibility and then click
        print("answer options - 1")
        answer_fl_1_1 = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@for='answer-fl-1-1']"))
        )
        # Scroll to the element
        driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", answer_fl_1_1)
        time.sleep(0.5)
        # click
        driver.execute_script("arguments[0].click();", answer_fl_1_1)

        print("answer options - 2")
        answer_fl_2_2 = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@for='answer-fl-2-2']"))
        )
        # Scroll to the element
        driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", answer_fl_2_2)
        time.sleep(0.5)
        # click
        driver.execute_script("arguments[0].click();", answer_fl_2_2)

        print("answer options - 3")
        answer_fl_3_2 = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@for='answer-fl-3-2']"))
        )
        # Scroll to the element
        driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", answer_fl_3_2)
        time.sleep(0.5)
        # click
        driver.execute_script("arguments[0].click();", answer_fl_3_2)

        # Wait for the submit button and click it
        next_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        )
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()

def test_adg429_positive_flow_page_paper_folding_test_sample_question():
    try:
        # Wait for the submit button and click it
        next_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        )
        # Scroll to the element
        driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", next_button)
        time.sleep(0.5)
        # click
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()

def test_adg429_positive_flow_page_paper_folding_test_part_1():
    try:
        for question_num in range(1, 11):  # Loop through questions 1 to 10
            answers_ppt1 = WebDriverWait(driver, 10).until(
                EC.visibility_of_element_located((By.XPATH, f"//*[@for='Part1Question{question_num}Answer{question_num}Option1']"))
            )
            # Scroll to the element
            driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", answers_ppt1)
            # click
            driver.execute_script("arguments[0].click();", answers_ppt1)

        # Wait for the submit button and click it
        # next_button = WebDriverWait(driver, 10).until(
        #     EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        # )
        # # Scroll to the element
        # driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", next_button)
        # time.sleep(0.5)
        # click
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        # driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")
        time.sleep(180)

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()

def test_adg429_positive_flow_page_paper_folding_test_part_2():
    try:
        for question_num in range(1, 11):  # Loop through questions 1 to 10
            answers_ppt2 = WebDriverWait(driver, 10).until(
                EC.visibility_of_element_located((By.XPATH, f"//*[@for='Part2Question{question_num}Answer{question_num}Option1']"))
            )
            # Scroll to the element
            driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", answers_ppt2)
            # click
            driver.execute_script("arguments[0].click();", answers_ppt2)

        # Wait for the submit button and click it
        # next_button = WebDriverWait(driver, 10).until(
        #     EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        # )
        # Scroll to the element
        # driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", next_button)
        # time.sleep(0.5)
        # click
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        # driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")
        time.sleep(180)

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()


def test_adg429_positive_flow_page_sample_rotation_test():
    try:
        # Repeat this structure for Questions 2 through 10 for RT2
        for q_num in range(1, 3):  # RT2 Question 2 to Question 10
            print(f"RT2 Q{q_num}")
            for a_num in range(1, 9):  # Answer 1 to Answer 8 for each question
                answer = WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.XPATH, f"//*[@name='SRT_question{q_num}answer{a_num}'][@value='different']"))
                )
                # Scroll to the element
                # driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", answer)
                # time.sleep(0.5)
                # click
                driver.execute_script("arguments[0].click();", answer)

            print("Completed SRT Page")

        # Wait for the submit button and click it
        next_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        )
        driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", next_button)
        time.sleep(0.5)
        # click
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()

def test_adg429_positive_flow_page_attention_check():
    try:
        attention_check = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@for='AttentionCheckAnswer1Option2']"))
        )
        driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", attention_check)
        time.sleep(0.5)
        driver.execute_script("arguments[0].click();", attention_check)

        # Wait for the submit button and click it
        next_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        )
        driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", next_button)
        time.sleep(0.5)
        # click
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()

def test_adg429_positive_flow_page_rotation_test_part_1():
    try:
        for q_num in range(1, 11):  # RT2 Question 2 to Question 10
            print(f"RT1 Q{q_num}")
            for a_num in range(1, 9):  # Answer 1 to Answer 8 for each question
                answer = WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.XPATH, f"//*[@name='RT1_question{q_num}answer{a_num}'][@value='same']"))
                )
                driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", answer)
                time.sleep(0.5)
                driver.execute_script("arguments[0].click();", answer)

        # Wait for the submit button and click it
        # next_button = WebDriverWait(driver, 10).until(
        #     EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        # )
        # driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", next_button)
        # time.sleep(0.5)
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        # driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")
        time.sleep(180)

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()


def test_adg429_positive_flow_page_rotation_test_part_2():
    print("Starting RT2 Page Rotation Test Part 2")

    try:
        # Repeat this structure for Questions 2 through 10 for RT2
        for q_num in range(1, 11):  # RT2 Question 2 to Question 10
            print(f"RT2 Q{q_num}")
            for a_num in range(1, 9):  # Answer 1 to Answer 8 for each question
                answer = WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.XPATH, f"//*[@name='RT2_question{q_num}answer{a_num}'][@value='different']"))
                )
                driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", answer)
                time.sleep(0.5)
                driver.execute_script("arguments[0].click();", answer)

            print("Completed RT2 Page Rotation Test Part 2")

        # Wait for the submit button and click it
        # next_button = WebDriverWait(driver, 10).until(
        #     EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        # )
        # driver.execute_script("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", next_button)
        # time.sleep(0.5)
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        # driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")
        time.sleep(180)

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()


def test_adg429_positive_flow_page_creative_brick_game():
    try:
        brick_input = WebDriverWait(driver, 10).until(
                EC.visibility_of_element_located((By.XPATH, "//*[@name='writeafewlinesaboutbricks']"))
            )
        s = "actions.move_to_element(submit_button).click().perform()  # Move to the element and click"
        brick_input.send_keys(s)

        # Wait for the submit button and click it
        # next_button = WebDriverWait(driver, 10).until(
        #     EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        # )
        # # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        # driver.execute_script("arguments[0].click();", next_button)
        # print("Clicked next button on page 2")

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(400)
        # driver.quit()

def test_adg429_positive_flow_page_proceed_to_dashboard():
    try:
        # Wait for the submit button and click it
        next_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        )
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()
        # driver.send_keys(Keys.ENTER)


def test_adg429_positive_flow_page_dashboard():
    try:
        # Answer all 14 questions
        for i in range(24):
            # identify and print dashboard
            dashboard_type = driver.current_url
            print(dashboard_type)

            # Select the first option
            answer_option = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.XPATH, "//*[@id='option-0']/parent::*/span"))
            )
            answer_option.click()
            print(f"Answered question {i+1} on {dashboard_type}")
        
            # Wait for the submit button and click it
            next_button = WebDriverWait(driver, 10).until(
                EC.visibility_of_element_located((By.XPATH, "//*[@class='nextbutton']"))
            )
            # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
            driver.execute_script("arguments[0].click();", next_button)
            print("Clicked next button on page 2")
            time.sleep(2)  # Short wait for the next question to load

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        time.sleep(2)
        # driver.quit()

def test_adg429_positive_flow_page_feedback_questions():
    try:
                
        # Wait for the submit button and click it
        next_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//*[@class='button']"))
        )
        # actions.move_to_element(submit_button).click().perform()  # Move to the element and click
        driver.execute_script("arguments[0].click();", next_button)
        print("Clicked next button on page 2")
        time.sleep(2)  # Short wait for the next question to load

    except Exception as e:
        print(f"An error occurred:")
        print(e)

    finally:
        print("Test completed. Closing the browser.")
        # time.sleep(40)
        # driver.quit()


# Run the test
if __name__ == "__main__":
    test_adg429_positive_flow_page_consent()
    test_adg429_positive_flow_page_financial_literacy()
    test_adg429_positive_flow_page_paper_folding_test_sample_question()
    test_adg429_positive_flow_page_paper_folding_test_part_1()
    test_adg429_positive_flow_page_paper_folding_test_part_2()
    test_adg429_positive_flow_page_sample_rotation_test()
    test_adg429_positive_flow_page_attention_check()
    test_adg429_positive_flow_page_rotation_test_part_1()
    test_adg429_positive_flow_page_rotation_test_part_2()
    test_adg429_positive_flow_page_creative_brick_game()
    # test_adg429_positive_flow_page_proceed_to_dashboard()
    # test_adg429_positive_flow_page_dashboard()
