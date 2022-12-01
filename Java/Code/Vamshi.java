@FunctionalInterface
interface A{
	void show();
}
// Method 1
// class B implements A{
// 	public void show(){
// 		System.out.println("Hello World");
// 	}
// }

public class Vamshi{
	public static void main(String[] args) {
		// Method 2
		// A obj = new A(){
		// 	public void show(){
		// 		System.out.println("hello Man");
		// 	}
		// };
		A obj = () -> System.out.println("Vamshi lambda function");
		obj.show();
	}
}