def main():
    N = int(input())
    A = list(map(int, input().split()))

    min_v = 1 << 32
    max_v = -1 * min_v

    for a in A:
        if a < min_v:
            min_v = a
        if a > max_v:
            max_v = a

    print(max_v-min_v)


if __name__ == "__main__":
    main()
