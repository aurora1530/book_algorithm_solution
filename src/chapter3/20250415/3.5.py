def main():
    N = int(input())
    A = list(map(int, input().split()))
    W = int(input())

    for bit in range(1 << N):
        sum = 0
        for i in range(N):
            if bit & (1 << i):
                sum += A[i]
        if sum == W:
            print(True)
            return
    print(False)
    return


if __name__ == "__main__":
    main()
