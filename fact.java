class fact {

    static int add(int a) {
        if(a == 1) {
            return 1;   // base case
        }
        return a * add(a - 1);   // recursion
    }

    public static void main(String[] args) {
        System.out.println(add(6));
    }
}
