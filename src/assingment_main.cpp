#include <iostream>

using namespace std;

// A program that calculates the salary of an employee based on the number of hours worked and the hourly rate of pay.

int main() {
    int empIds[10]; // Array to hold employee IDs
    int hours; // holds the number of hours worked by an employee
    int payRate; // holds the hourly pay rate
    int wages; // holds the employee's wages
    empIds = {1234567, 2345678, 3456789, 5658845,4520125, 7895122, 8777541, 8451277, 1302850, 7580489}; // Array to hold employee IDs
    // Your code here
    // cout << "Enter the number of hours worked by employee " << empIds[0] << ": ";
    // looping through the array and asking for the hours worked and pay rate
    for (int i = 0; i < 10; i++) {
        cout << "Enter the number of hours worked by employee " << empIds[i] << ": ";
        // not accepting negative numbers for hours worked or number less than 15.00 for pay rate
        while (hours < 0) {
            cout << "Please enter a positive number for hours worked: ";
            cin >> hours;
        }
        while (payRate < 15.00) {
            cout << "Please enter a number greater than 15.00 for pay rate: ";
            cin >> payRate;
        }
        cin >> hours;
        cout << "Enter the hourly pay rate for employee " << empIds[i] << ": ";
        cin >> payRate;
        wages = hours * payRate;
        cout << "Employee " << empIds[i] << " earned $" << wages << endl;
    }

    return 0;
}
