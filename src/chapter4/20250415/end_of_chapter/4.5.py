counter = 0


def count(K: int, cur: int, use: int):
    if cur > K:
        return 0
    if counter == 0b111:
        counter += 1

    count(K, cur * 10 + 7, use | 0b001)
    count(K, cur * 10 + 5, use | 0b010)
    count(K, cur * 10 + 3, use | 0b100)


def main():
    N = int(input())
    count(N, 0, 0)
    print(counter)
