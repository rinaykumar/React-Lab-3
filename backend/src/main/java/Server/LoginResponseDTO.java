package Server;

public class LoginResponseDTO {
    public final boolean success;
    public final String error;

    public LoginResponseDTO(boolean success, String error) {
        this.success = success;
        this.error = error;
    }
}
