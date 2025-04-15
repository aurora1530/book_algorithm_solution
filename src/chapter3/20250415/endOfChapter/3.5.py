def main():
    # N = int(input())
    A = list(map(int, input().split()))

    min_num_of_2fac = 1 << 32
    for a in A:
        count = 0
        while a > 0 and a & 1 == 0:
            count += 1
            a = a >> 1
        min_num_of_2fac = min(count, min_num_of_2fac)

    print(min_num_of_2fac)


if __name__ == "__main__":
    main()
