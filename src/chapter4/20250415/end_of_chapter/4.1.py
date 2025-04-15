from typing import Dict


def tri(memo: Dict[int, int], i) -> int:
    if i in memo:
        return memo.get(i)

    if i == 0 or i == 1:
        return 0
    if i == 2:
        return 1

    val = tri(memo, i-3) + tri(memo, i-2) + tri(memo, i-1)
    memo[i] = val
    return val


def main():
    N = int(input())
    memo = {}
    print(tri(memo, N))


if __name__ == "__main__":
    main()
