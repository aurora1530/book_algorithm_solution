def main():
    N = int(input())
    A = list(map(int, input().split()))
    if N < 2 or len(A) < 2:
        raise RuntimeError()

    if A[0] < A[1]:
        mins = [A[0], A[1]]
    else:
        mins = [A[1], A[0]]

    for v in A[2:]:
        if v < mins[0]:
            mins[1], mins[0] = mins[0], v
        elif v < mins[1]:
            mins[1] = v

    print(mins[1])


if __name__ == "__main__":
    main()
