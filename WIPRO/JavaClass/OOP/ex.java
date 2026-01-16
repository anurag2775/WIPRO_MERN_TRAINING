package OOP;

public class ex {
    
}
import java.util.Scanner;

/* Bank Account Class */
class BankAccount {
    private double balance;   // private variable (encapsulation)

    // Constructor
    public BankAccount(double bal) {
        balance = bal;
    }

    // Deposit money
    public void deposit(double amount) {
        balance = balance + amount;
    }

    // Withdraw money
    public void withdraw(double amount) {
        balance = balance - amount;
    }

    // Get balance
    public double getBalance() {
        return balance;
    }
}

/* Loan Account Class */
class LoanAccount {
    private double loanAmount;   // private variable

    // Constructor
    public LoanAccount(double loan) {
        loanAmount = loan;
    }

    // Calculate EMI (simple logic)
    public double calculateEMI() {
        return loanAmount / 12;
    }

    // Pay EMI
    public void payEMI(String mode) {
        System.out.println("EMI paid using " + mode);
    }
}

/* Main Class */
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Bank Account
        BankAccount acc = new BankAccount(5000);
        acc.deposit(2000);
        acc.withdraw(1000);

        System.out.println("Current Balance: " + acc.getBalance());

        // Loan Account
        LoanAccount loan = new LoanAccount(12000);
        double emi = loan.calculateEMI();

        System.out.println("Monthly EMI: " + emi);

        System.out.print("Enter payment mode (Cash/Card): ");
        String mode = sc.next();

        loan.payEMI(mode);
    }
}
