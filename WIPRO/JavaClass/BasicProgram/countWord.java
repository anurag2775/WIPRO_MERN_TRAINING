package BasicProgram;
public class countWord {
    public static void main(String[] args) {        
        String s = "Here is my java program";
        String[] words = s.split(" ");
        int count = words.length;
        System.out.println("Total word count: "+count);
    }
}
