from typing import List


def check(A: List[int], i: int, w: int) -> bool:
    """
    最初のi個から何個か選んで、総和をwにできるかどうか
    """
    if i == 0:
        return w == 0

    return check(A, i - 1, w) or check(A, i-1, w - A[i - 1])


def main():
    A = list(map(int, input().split()))
    W = int(input())

    ok = check(A, len(A), W)
    print(ok)


if __name__ == "__main__":
    main()
