package Server;

import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Map;
import static spark.Spark.*;

public class Server {
    static Map<String,String> users = new HashMap<>();

    public static void main(String[] args){
        // Set up users
        users.put("userA", "abc");
        users.put("userB", "123");

        Gson gson = new Gson();

        port(4000);
        post("/api/authenticate", (req, res) -> {
            String bodyString = req.body();
            LoginDTO loginDTO = gson.fromJson(bodyString, LoginDTO.class);
            String password = users.get(loginDTO.username);
            if (password == null) {
                LoginResponseDTO responseDTO = new LoginResponseDTO(false, "User not found");
                return gson.toJson(responseDTO);
            }
            if (!password.equals(loginDTO.password)) {
                LoginResponseDTO responseDTO = new LoginResponseDTO(false, "Password is incorrect");
                return gson.toJson(responseDTO);
            }
            LoginResponseDTO responseDTO = new LoginResponseDTO(true, null);
            return gson.toJson(responseDTO);
        });
    }
}
