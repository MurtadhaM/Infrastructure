#include <iostream>
#include <sys/socket.h>

int main() {
    int sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd == -1) {
        std::cout << "Failed to create socket" << std::endl;
        return 1;
    }

    // Your code here

    return 0;
}