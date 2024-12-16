#include <bits/stdc++.h>
using namespace std;
vector<string> generateSubsequences(const string &s) {
    vector<string> subsequences;
    int n = s.size();
    for (int i = 0; i < (1 << n); ++i) {
        std::string subseq;
        for (int j = 0; j < n; ++j) {
            if (i & (1 << j)) {
                subseq += s[j];
            }
        }
        subsequences.push_back(subseq);
    }
    return subsequences;
}


std::vector<std::string> findCommonInSubsequences(const std::string &s1, const std::string &s2) {
    std::vector<std::string> subseq_s1 = generateSubsequences(s1);
    std::vector<std::string> subseq_s2 = generateSubsequences(s2);

    std::unordered_set<std::string> set_s1(subseq_s1.begin(), subseq_s1.end());
    std::unordered_set<std::string> set_s2(subseq_s2.begin(), subseq_s2.end());

    std::vector<std::string> commonSubsequences;

    for (const auto &subseq : set_s1) {
        if (set_s2.find(subseq) != set_s2.end()) {
            commonSubsequences.push_back(subseq);
        }
    }

    return commonSubsequences;
}

int main() {
  int n,m;
  cin>>n>>m;
  string s,t;
  cin>>s>>t;
    std::vector<std::string> commonSubsequences = findCommonInSubsequences(s, t);

    cout<<(commonSubsequences.size()-1)%1000000007;

    return 0;
}