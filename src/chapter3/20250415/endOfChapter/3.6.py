def main():
    K, N = map(int, input().split())

    count = 0
    for x in range(K + 1):
        for y in range(K+1):
            z = N - x - y
            if z <= K:
                count += 1

    print(count)


if __name__ == "__main__":
    main()
