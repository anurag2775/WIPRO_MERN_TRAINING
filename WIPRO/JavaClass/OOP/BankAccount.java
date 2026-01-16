package OOP;

public class BankAccount {

    private int id;
    private long phoneno;
    private String name;
    private double balance;

public int getId() {
        return id;
    }
 
    public String getName() {
        return name;
    }
    public void setName(String Aadharname) {
        
        this.name = Aadharname;
    }
    
public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited:" + amount);
        }
    }

public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn:" + amount);
        }   
        
public double getBalance() {
        return balance;
    }
    
}




abstract class LoanAccount {

    protected double loanAmount;
    protected int tenureMonths;
    protected double interestRate;

    public LoanAccount(double loanAmount, int tenureMonths, double interestRate) {
        this.loanAmount = loanAmount;
        this.tenureMonths = tenureMonths;
        this.interestRate = interestRate;
    }

    abstract double calculateEMI();
}


class PersonalLoan extends LoanAccount {

    public PersonalLoan(double loanAmount, int tenureMonths, double interestRate) {
        super(loanAmount, tenureMonths, interestRate);
    }

    public double calculateEMI() {
        double monthlyRate = interestRate / (12 * 100);
        return (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
               (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    }
}


public class BankApp {

    public static void main(String[] args) {

        // Bank Account Operations
        BankAccount account = new BankAccount("Anurag Verma");
        account.deposit(10000);
        account.withdraw(3000);
        System.out.println("Available Balance: ₹" + account.getBalance());

        // Loan & EMI
        LoanAccount loan = new PersonalLoan(50000, 12, 10);
        double emi = loan.calculateEMI();
        System.out.println("Monthly EMI: ₹" + Math.round(emi));

        // EMI Payment
        Payment payment;

        payment = new CardPayment();
        payment.payEMI(emi);

        payment = new CashPayment();
        payment.payEMI(emi);
    }
}
