// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract getGrades{

    function levels(uint marks)public  pure returns(string memory message){
        if(marks <= 100 && marks >= 90){
            message = "Grade A";
            return  message;

        }else  if(marks >= 80 && marks <= 90){
             message = "Grade B";
             return message;
        }else if(marks >= 70 && marks <=79){
            message = "Grade C";
            return message;
        }else if(marks >= 60 && marks <=69){
            message = "Grade C";
            return message;
    } else if(marks <= 59 && marks >=0){
            message = "Below 60";
            return message;
    }else{
        message ="Unknown Grade";
        return message;
    }
    }
}