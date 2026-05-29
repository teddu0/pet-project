Запуск всех тестов с генерацией отчета в allure:

        rm -rf allure-results allure-report
        npx playwright test
        allure generate ./allure-results -o ./allure-report --clean
        allure open ./allure-report



Очищается старый отчет: rm -rf allure-results allure-report
Запускает тесты: npx playwright test
Генерирует отчет: allure generate ./allure-results -o ./allure-report --clean
Запускает отчетник: allure open ./allure-report