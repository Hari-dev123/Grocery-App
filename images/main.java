import java.util.ArrayList;
import java.util.Arrays;

class main{
    
    public static void main(String[] args) {
         int arr[] = {1, 2, -4, -5, 3, 4};
         ArrayList<Integer> pos = new ArrayList<>();
         ArrayList<Integer> neg = new ArrayList<>();
         for(int n : arr){
            if(n > 0){
                pos.add(n);
            }else{
                neg.add(n);
            }
         }
         if(pos.size() < neg.size()){
            int p = 0;
            int n = 1;
             for(int i=0;i<pos.size();i++){
                 pos.set(i*p, )
             }
         }
    }
}

// *   *
//  * *  
//   *
//  * *
// *   *