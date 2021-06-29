# Luhn Algorithm (Programming Logic and Testing) #

The [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm) algorithm or Luhn formula (also known as "modulus 10" or "mod 10" algorithm) is used to authentical the validity of identification numbers such as credit card numbers, Canadian Social Insurance Numbers, South African ID Numbers, IMEI numbers, National Provider Identifier numbers (US), etc. This uses a simple formula called checksum to validate these numbers. The formula is described below:

## Description of Luhn formula using example

* Double the value of every second digit starting from the rightmost digit and moving left. In a situation where the doubling operation is greater than 9 (e.g., 8 x 2 = 16), then it is further simplified by taking the sum of the digits of the result (i.e, 16 will be 1+6 =7, and 18 will be 1+8 = 9). 
* The summation of all the digits including the check digit is computed.
* The number is valid if the total modulu 10 is equal to 0, otherwise it is invalid.

An illustration using account number 7992739871x, where **x** is the check digit.

To find the check digit, x, the total of the digits (from the third row) is computed, then multiplied by 9 times that value module 10 (i.e., (67 x 9) mod 10). In this case, it becomes 603 mod 10 which is equal to 3. Therefore, **x=3**. 



||7|	9 |	9|2|7|	3	|9|	8	|7|	1	|x|
-:|:-:|:-:|-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Double every other	|7|	**18**|	9|	**4**|	7|	**6**	|9|	**16**|	7	|**2**|	x|
Sum digits|	7|	9 (1+8)	|9|	4|	7|	6	|9|	7 (1+6)|	7|	2|	x|

