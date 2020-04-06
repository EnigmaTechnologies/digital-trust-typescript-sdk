export class Constants {
  public static readonly authJWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InRlc3Qta2V5In0.eyJzdWIiOiIxMjMiLCJhdWQiOiJodHRwOi8vb3BlbmlkLmlvLyIsImlzcyI6IjEyMyIsImp0aSI6Imp0aS0xMTExIiwiZXhwIjozMSwiaWF0IjoxLCJuYmYiOjF9.0fSWuZoBIGd33MTCMaoPKQVWXaXppaAna8GtdAdX7eEVYkfxJRTpM4mt3lmqrUoVTXflTJfr6vbZ7NRyLIM486vh5p8OESpNzM9OfQB5_r9_gzz8zuPV7Qmfmg-B8Fhlo63LNObrYBx0Icg1e_0vRbzjm6XXaRwtg6gWQdn5BzEH8TqrtJX1X8StGkqp0NWFba8DLYUgpQA-jJoymScq66BaMorFuuubzdik0nDPkZqU1G9BWnhWYfU1lZl1AInDRVSJfCJaV8chZ2jyTsvlLxoU-P47oPxlHWVohx9vIWm5uy9iZqqnPfBzhWF_hSHuZksqcHOqDpntanK3LrZquA'
  public static readonly requestJWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InRlc3Qta2V5In0.eyJzdWIiOiIxMjMiLCJhdWQiOiJodHRwOi8vb3BlbmlkLmlvLyIsImlzcyI6IjEyMyIsImp0aSI6Imp0aS0yMjIyIiwiZXhwIjozMSwiaWF0IjoxLCJuYmYiOjEsIm5vbmNlIjoibm9uY2UtMTExMSIsInJlc3BvbnNlX3R5cGUiOiJjb2RlIiwic2NvcGUiOiJvcGVuaWQiLCJjbGllbnRfaWQiOiIxMjMiLCJjbGFpbXMiOnsicHVycG9zZSI6InRvcCBsZXZlbCBwdXJwb3NlIiwiaWRfdG9rZW4iOnsiZ2l2ZW5fbmFtZSI6eyJpYWwiOjJ9LCJhc3NlcnRpb25fY2xhaW1zIjp7ImFnZSI6eyJwdXJwb3NlIjoiYWdlIHB1cnBvc2UiLCJhc3NlcnRpb24iOnsiZ3QiOjIxfX0sImFkZHJlc3MiOnsicHVycG9zZSI6IkFkZHJlc3MgcHVycG9zZSIsImFzc2VydGlvbiI6eyJwb3N0YWxfY29kZSI6eyJlcSI6Ik1LOSAxQkIifSwiY291bnRyeSI6eyJlcSI6IlVLIn19fX19fX0.BL2wquNpv7R6e_HKVVEvPh_UOwvymIaqnMzLk_UBkr-tvzN_4XsaK9jY1s5UOvTTfZ5cy0itzuzS8gv2qeQ9CFB-d7B6TsWZEHu95sfprwMd64aHTlxRE-l7_yuGZXC3YWH0N1TFmgdSB2gic1fxqRgw5STmSv2IwHzLicpkDO8BNIY9SyW4oHF3Y1ekNWVZfDggYV2r_ztBpnq62Ktt0x73n4WwACOUlyJgI5nhAKDaPceGkWRmEzHhx50IYez08M3daAcfChEi99D35nzVwSGjRNj74vcv7k0mGDtXR8hDQZZz4-tEv0XYQ3mBYzUEQhWiNg2SOUuwekgW1-ARow'
  public static readonly requestJWTWithRedirectURIAndGeneratedNonce = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InRlc3Qta2V5In0.eyJzdWIiOiIxMjMiLCJhdWQiOiJodHRwOi8vb3BlbmlkLmlvLyIsImlzcyI6IjEyMyIsImp0aSI6Imp0aS0yMjIyIiwiZXhwIjozMSwiaWF0IjoxLCJuYmYiOjEsInJlZGlyZWN0X3VyaSI6Imh0dHBzOi8vcnAuZXhhbXBsZS5jb20vY2FsbGJhY2siLCJub25jZSI6Im5vbmNlLTExMTEiLCJyZXNwb25zZV90eXBlIjoiY29kZSIsInNjb3BlIjoib3BlbmlkIiwiY2xpZW50X2lkIjoiMTIzIiwiY2xhaW1zIjp7InB1cnBvc2UiOiJ0b3AgbGV2ZWwgcHVycG9zZSIsImlkX3Rva2VuIjp7ImdpdmVuX25hbWUiOnsiaWFsIjoyfSwiYXNzZXJ0aW9uX2NsYWltcyI6eyJhZ2UiOnsicHVycG9zZSI6ImFnZSBwdXJwb3NlIiwiYXNzZXJ0aW9uIjp7Imd0IjoyMX19LCJhZGRyZXNzIjp7InB1cnBvc2UiOiJBZGRyZXNzIHB1cnBvc2UiLCJhc3NlcnRpb24iOnsicG9zdGFsX2NvZGUiOnsiZXEiOiJNSzkgMUJCIn0sImNvdW50cnkiOnsiZXEiOiJVSyJ9fX19fX19.pzJec4UwpebZ4wnQyGBa_9xoI3LrJtgnVfz_VWcaRYzcK416S34hOjliMfC1PW1efg6d84tZStz-n32gs92SatmjHZqq9g3Sd4cnb3yI3RK6upJbe-jolKj9UuBV4AjkTI31TCxk7eUbcsRjo827yUThGGKlUm6MJMaE0ClUMOrHQnLRgdyM9mTDWB8DTGrB0MBD5BHM8lXVewnbUY9jRgZnz6cXSJMTXFxyTme0HoliTDJJvVp_MJkodAn_YpdGNKsD4_kmQ0HmMcNOy8w3JDJSP2gX2LHgJ_L-uX2nHrOVVNcZEzS_prGZdYsM6w2CX0VFM-zt9y44vAIhWQgTWA'
  public static readonly requestJWTWithRedirectURIAndCustomNonce = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InRlc3Qta2V5In0.eyJzdWIiOiIxMjMiLCJhdWQiOiJodHRwOi8vb3BlbmlkLmlvLyIsImlzcyI6IjEyMyIsImp0aSI6Imp0aS0yMjIyIiwiZXhwIjozMSwiaWF0IjoxLCJuYmYiOjEsInJlZGlyZWN0X3VyaSI6Imh0dHBzOi8vcnAuZXhhbXBsZS5jb20vY2FsbGJhY2siLCJub25jZSI6Im15LW5vbmNlIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJzY29wZSI6Im9wZW5pZCIsImNsaWVudF9pZCI6IjEyMyIsImNsYWltcyI6eyJwdXJwb3NlIjoidG9wIGxldmVsIHB1cnBvc2UiLCJpZF90b2tlbiI6eyJnaXZlbl9uYW1lIjp7ImlhbCI6Mn0sImFzc2VydGlvbl9jbGFpbXMiOnsiYWdlIjp7InB1cnBvc2UiOiJhZ2UgcHVycG9zZSIsImFzc2VydGlvbiI6eyJndCI6MjF9fSwiYWRkcmVzcyI6eyJwdXJwb3NlIjoiQWRkcmVzcyBwdXJwb3NlIiwiYXNzZXJ0aW9uIjp7InBvc3RhbF9jb2RlIjp7ImVxIjoiTUs5IDFCQiJ9LCJjb3VudHJ5Ijp7ImVxIjoiVUsifX19fX19fQ.QjA2yJlpBgN_w6OiKdjOcW5RR5BhSl7b0QeQDMI6agtR89t2B9_Ri5wt2V9xRsniQ48iSAsFAofxhmqE3EhfJj4c-wN2bm6EAHUALS6c0fmOo-UgBGSJ_fHUwSAuTO5khAvCWhvQrV7G3sWDI8kWIUB30JOTjIW--6S2ffVwG8mLC_IKQ-mLG1zXLoi7EiepFTRnbOeRYVjhfl7iGr9O8ur1mmFD0YYFEyAcrtRn4QSDe9Ea4JKskUJh4NYm25-CZcIo9rakp9Y_eJDxDXclCHgKIMB48TnSmipkY-oTYCxuuOi4ka0GeeBoe0wGst33__wW91utVIrRuJjivDEKpQ'
  public static readonly requestJWTWithRedirectURIAndCustomNonceAndGeneratedCodeChallenge = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InRlc3Qta2V5In0.eyJzdWIiOiIxMjMiLCJhdWQiOiJodHRwOi8vb3BlbmlkLmlvLyIsImlzcyI6IjEyMyIsImp0aSI6Imp0aS0yMjIyIiwiZXhwIjozMSwiaWF0IjoxLCJuYmYiOjEsInJlZGlyZWN0X3VyaSI6InJwLWV4YW1wbGU6Ly9jYWxsYmFjayIsIm5vbmNlIjoibXktbm9uY2UiLCJyZXNwb25zZV90eXBlIjoiY29kZSIsInNjb3BlIjoib3BlbmlkIiwiY2xpZW50X2lkIjoiMTIzIiwiY2xhaW1zIjp7InB1cnBvc2UiOiJ0b3AgbGV2ZWwgcHVycG9zZSIsImlkX3Rva2VuIjp7ImdpdmVuX25hbWUiOnsiaWFsIjoyfSwiYXNzZXJ0aW9uX2NsYWltcyI6eyJhZ2UiOnsicHVycG9zZSI6ImFnZSBwdXJwb3NlIiwiYXNzZXJ0aW9uIjp7Imd0IjoyMX19LCJhZGRyZXNzIjp7InB1cnBvc2UiOiJBZGRyZXNzIHB1cnBvc2UiLCJhc3NlcnRpb24iOnsicG9zdGFsX2NvZGUiOnsiZXEiOiJNSzkgMUJCIn0sImNvdW50cnkiOnsiZXEiOiJVSyJ9fX19fX0sImNvZGVfY2hhbGxlbmdlIjoiOVNGVEV4RjV2YzlIVk5jZmpJREZKUkZ4eUNrbXNwNjJ5cGZyTkVDVFlabyIsImNvZGVfY2hhbGxlbmdlX21ldGhvZCI6IlMyNTYifQ.MGpgZrQedHhOS_PWoC2s5u0M8rRfBwW0zEEBIvmZH2RGRaKN8HTptVJJh_JT7UaRoqTTMvuSaQLXYZSrriaPEeI8eQksy74FBBUa94E5lGB6cx7cU02OI-P_9wvi_7Xj8a7Gs_Lv9T0m5xXsya4XrWLA3RxEBEdoH2oN2NDWqIkNLRJ1XYzYRRv4B5YOc6DkV4x3P9t5kJ3cI5Wy3G4u4CMT8z06Cwlc6GyswAQ-V6PjVjXzLJ2yQan7gAQwWO_g02MEaUkA8vOwSNSHw5-cDacTu592IVsIF1zHVO8fGgWFRq2HZwoWoqddIx8XiWICpO7n02hP7UTEC3Rp5ILtzw'
  public static readonly requestJWTWithRedirectURIAndCustomNonceAndCustomCodeChallenge = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InRlc3Qta2V5In0.eyJzdWIiOiIxMjMiLCJhdWQiOiJodHRwOi8vb3BlbmlkLmlvLyIsImlzcyI6IjEyMyIsImp0aSI6Imp0aS0yMjIyIiwiZXhwIjozMSwiaWF0IjoxLCJuYmYiOjEsInJlZGlyZWN0X3VyaSI6InJwLWV4YW1wbGU6Ly9jYWxsYmFjayIsIm5vbmNlIjoibXktbm9uY2UiLCJyZXNwb25zZV90eXBlIjoiY29kZSIsInNjb3BlIjoib3BlbmlkIiwiY2xpZW50X2lkIjoiMTIzIiwiY2xhaW1zIjp7InB1cnBvc2UiOiJ0b3AgbGV2ZWwgcHVycG9zZSIsImlkX3Rva2VuIjp7ImdpdmVuX25hbWUiOnsiaWFsIjoyfSwiYXNzZXJ0aW9uX2NsYWltcyI6eyJhZ2UiOnsicHVycG9zZSI6ImFnZSBwdXJwb3NlIiwiYXNzZXJ0aW9uIjp7Imd0IjoyMX19LCJhZGRyZXNzIjp7InB1cnBvc2UiOiJBZGRyZXNzIHB1cnBvc2UiLCJhc3NlcnRpb24iOnsicG9zdGFsX2NvZGUiOnsiZXEiOiJNSzkgMUJCIn0sImNvdW50cnkiOnsiZXEiOiJVSyJ9fX19fX0sImNvZGVfY2hhbGxlbmdlIjoiY2hhbGxlbmdlLTExMTEiLCJjb2RlX2NoYWxsZW5nZV9tZXRob2QiOiJTMjU2In0.c3BwzMP29tFjzxse2ZkBflAqg4GFLN-5IzgZCrrRNg-6MXc4VW5FdfrIxIqmwExsA8LhT2SLEUS7BdSGjwZLzPPFAS9euxNYNEUgeb99TO6EjzOJI58QxvsGvEfEWgMYlI8IqHWM1L-Jj3kjeZPXMN4o8d0O68NtAM-FiaPgog3PpFMKCfHzuTUjfVAHrSeqq7qwFvOIdvCbVd1N-fM5xa2KXIPhyJhEZMNC3XpCTL7nrveRqJgPAf1SHYp-8ZDkkGHuSj9_qOn7aHh68knXV7FNgGNp0Z3hTNVfwWFZWed6kTnZQ2uqNb2zciFIQs9LBKaKH-XJ8UrO6U790-Qahw'
  public static readonly verifySignatureJwt = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im9wX2tleV8xIn0.eyJzdWIiOiI1NTE2ZjAyNzY0YzExMjJiNWQ3NmQ3MzdjOTExOTg4ZDhiNjMxNzNjNjM0MmJlMjFiNjA5MjlhYzNkZDM0OTc1IiwidHhuIjoib1BGRHBDU1JUNzZSbTVucEpvTk9jIiwiYXNzZXJ0aW9uX2NsYWltcyI6eyJhZ2UiOnsicmVzdWx0Ijp0cnVlfSwiYWRkcmVzcyI6eyJyZXN1bHQiOnRydWV9LCJ0b3RhbF9iYWxhbmNlIjp7InJlc3VsdCI6dHJ1ZX19LCJwaG9uZV9udW1iZXIiOiIrNDQyMzI0MzA5MjExMSIsIm5vbmNlIjoidGRzZHciLCJhdF9oYXNoIjoiX0FfYVV5NWg3M2lrWUp6U0lxV2E3QSIsImF1ZCI6InVkS1F0ZGtaZ3VpZXJBalFGeTU4ZSIsImV4cCI6MTU4MzQ4OTU1NywiaWF0IjoxNTgzNDg4OTU3LCJpc3MiOiJodHRwczovL29wLmlhbWlkLmlvIn0.1y2saz2YJqaSbSUf6je05mmd7O-lXiNw_breSgleiu_zIlE5u33JheqClZFRfpVCskCpacD8qEqSAGfOxKjLsUIPZIKAruMOZD94Q5xzbDwYJ4UR0KiDgs6BqNhVZ4p093J9jKzRrFX8xZkXv8-91z3zhcZ3NlohVyhPhV4xHpdPfNkm5Y9jh-f5gGwB6BK6LsVsHqGXkOTUj4ma8ZrvCwiJgOSbLsKxqv3Td05TzK7rlkvmhTJ0aUXjUJN_cBsC7JooPw791b3n4sUr9JDEIzj-3t65gMUEamYL_mGP38KqOyMVPoO_Ir5tdgXJz8cSymPVtjjOcQW60Xg6uzfMvQ'
  public static readonly failingVerifySignatureJwt = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im9wX2tleV8xIn0.eyJzdWIiOiI1NTE2ZjAyNzY0YzExMjJiNWQ3NmQ3MzdjOTExOTg4ZDhiNjMxNzNjNjM0MmJlMjFiNjA5MjlhYzNkZDM0OTc1IiwidHhuIjoib1BGRHBDU1JUNzZSbTVucEpvTk9jIiwiYXNzZXJ0aW9uX2NsYWltcyI6eyJhZ2UiOnsicmVzdWx0Ijp0cnVlfSwiYWRkcmVzcyI6eyJyZXN1bHQiOnRydWV9LCJ0b3RhbF9iYWxhbmNlIjp7InJlc3VsdCI6dHJ1ZX19LCJwaG9uZV9udW1iZXIiOiIrNDQyMzI0MzA5MjExMSIsIm5vbmNlIjoidGRzZHciLCJhdF9oYXNoIjoiX0FfYVV5NWg3M2lrWUp6U0lxV2E3QSIsImF1ZCI6InVkS1F0ZGtaZ3VpZXJBalFGeTU4ZSIsImV4cCI6MTU4MzQ4OTU1NywiaWF0IjoxNTgzNDg4OTU3LCJpc3MiOiJodHRwczovL29wLmlhbWlkLmlvIn0.1y2saz2YJqaSbSUf6je05mmd7O-lXiNw_breSgleiu_zIlE5u33JheqClZFRfpVCskCpacD8qEqSAGfOxKjLsUIPZIKAruMOZD94Q5xzbDwYJ4UR0KiDgs6BqNhVZ4p093J9jKzRrFX8xZkXv8-91z3zhcZ3NlohVyhPhV4xHpdPfNkm5Y9jh-f5gGwB6BK6LsVsHqGXkOTUj4ma8ZrvCwiJgOSbLsKxqv3Td05TzK7rlkvmhTJ0aUXjUJN_cBsC7JooPw791b3n4sUr9JDEIzj-3t65gMUEamYL_mGP38KqOyMVPoO_Ir5tdgXJz8cSymPVtjjOcQW60Xg6uzfMzQ'
  public static readonly idTokenInvalidSignature = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NTE2ZjAyNzY0YzExMjJiNWQ3NmQ3MzdjOTExOTg4ZDhiNjMxNzNjNjM0MmJlMjFiNjA5MjlhYzNkZDM0OTc1IiwidHhuIjoib1BGRHBDU1JUNzZSbTVucEpvTk9jIiwiYXNzZXJ0aW9uX2NsYWltcyI6eyJhZ2UiOnsicmVzdWx0IjpmYWxzZX0sImFkZHJlc3MiOnsicmVzdWx0Ijp0cnVlfSwidG90YWxfYmFsYW5jZSI6eyJyZXN1bHQiOnRydWV9fSwicGhvbmVfbnVtYmVyIjoiKzQ0MjMyNDMwOTIxMTEiLCJub25jZSI6InRkc2R3IiwiYXRfaGFzaCI6Il9BX2FVeTVoNzNpa1lKelNJcVdhN0EiLCJhdWQiOiJ1ZEtRdGRrWmd1aWVyQWpRRnk1OGUiLCJleHAiOjE1ODM3Njk4MzUsImlhdCI6MTU4MzQ4ODk1NywiaXNzIjoiaHR0cHM6Ly9vcC5pYW1pZC5pbyIsImp0aSI6IjBmMTY3NDI4LWE3NDUtNDc1NC1hZjRlLWJlOWY4OWZkZDI3MCJ9.uTPqU0SoTVxM1VC8UxA0IssGNMLHbhKq6w2vB7UL8Cs'
  public static readonly DATE_28_FEB_2002 = new Date(Date.parse('2020-02-28'))
}