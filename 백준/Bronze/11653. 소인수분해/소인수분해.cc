#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n == 1) return 0;
    int num = n;
    int div = 2;
    while (1) {
        if (num < div) break;
        
        if (num % div != 0) {
            div++;
        } else {
            num /= div;
            cout << div << "\n";
        }
    }
}